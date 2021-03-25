export default (assetPath)=>{
    return assetPath.startsWith('/')? process.env.PUBLIC_URL + assetPath : assetPath;
    // return process.env.PUBLIC_URL+assetPath;
}