const path = require( 'path' );
module.exports = {
   context: __dirname,
   entry: './index.js',
   output: {
      path: path.resolve( __dirname, 'public'),
      filename: 'main.js',
      
   },
   devServer: {
      historyApiFallback: true,
      contentBase: ["./public"],
      open: true,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
         },
         {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: 'file-loader?name=fonts/[name].[ext]!static'
         }
   ]
   },
   
};