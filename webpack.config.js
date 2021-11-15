const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    };

    if(isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin
        ]
    }

    return config
};

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: {
        app: './src/client/index.tsx',
    },
    output: {
        filename: 'public/js/[name].js',
        path: path.resolve(__dirname, './build/src/client'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chat App',
            template: './src/client/assets/html/template.html',
            scriptLoading: 'defer',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/client/assets/img/ico/favicon.ico'),
                    to: path.resolve(__dirname, 'build/src/client/public/ico')
                }
            ],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].css'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', 'css', '.less', '.html'],
        alias: {
            '@aliases': path.resolve(__dirname, './src/client/types/aliases'),
            '@api': path.resolve(__dirname, './src/client/api'),
            '@config': path.resolve(__dirname, './src/client/config'),
            '@core': path.resolve(__dirname, './src/client/core'),
            '@interfaces': path.resolve(__dirname, './src/client/types/interfaces'),
            '@lang': path.resolve(__dirname, './src/client/lang'),
            '@store': path.resolve(__dirname, './src/client/store'),
            '@styles': path.resolve(__dirname, './src/client/assets/styles'),
            '@ui': path.resolve(__dirname, './src/client/ui'),
            '@utils': path.resolve(__dirname, './src/client/utils')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
        ],
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        hot: true,
        port: 3007,
        writeToDisk: true,
    },
    optimization: optimization()
}
