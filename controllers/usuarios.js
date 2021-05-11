const { response }  = require('express');


const usuariosGet = (req= request ,res = response)=>{
    const {query,nombre,apikey} = req.query;
    
    res.json({
        msg: 'get API-controlador',
        ok: true,
        msg: 'get API',
        query,
        nombre,
        apikey
    });
}

const usuariosPost = (req,res = response)=>{
    const {nombre, edad} = req.body;
   
    
    res.json({
        msg: 'post API-controlador',
        ok: true,
        msg: 'post API',
        nombre,
        edad
    });
}

const usuariosPut = (req,res = response)=>{
    const id = req.params.id;

    res.json({
        msg: 'put API-controlador',
        ok: true,
        msg: 'put API',
        id
    });
}

const usuariosPatch = (req,res = response)=>{
    res.json({
        msg: 'patch API-controlador',
        ok: true,
        msg: 'patch API'
    });
}

const usuariosDelete = (req,res = response)=>{
    res.json({
        msg: 'delete API-controlador',
        ok: true,
        msg: 'delete API'
    });
}


module.exports = {
    
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

};
