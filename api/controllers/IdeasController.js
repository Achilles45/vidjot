/**
 * IdeasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    //List function to fetch all ideas from DB
    list: function(req, res){
        //Fetch all ideas from the database
        Ideas.find({}).exec((err, ideas) =>{
            //Check for errors first
            if(err){
                res.send(500, {
                    message: "Oops something went wrong"
                })
            }
            //If no errors
            res.view("list", {ideas: ideas});
        })
    },

    //Function to add an idea
    add:function(req, res){
        //Load the add view
        res.view('add');
    },

    //Function to create
    create:function(req, res){
        Ideas.create({
            id: sails.helpers.getUuid(),
            title: req.body.title,
            body: req.body.body
        }).exec((err)=>{
            if(err){
                res.send(500, {message: "Database Error"});
            }
            //If no errors, redirect to ideas page
            res.redirect('/ideas/list');
        })
    },

    //Function to delete
    delete: function(req, res){
        Ideas.destroy({id: req.params("id")})
        if(err){
            res.send(500, {message: "Something went wrong"});
        }
    },

    edit: function(){
        Ideas.findOne({id: req.params.id}).exec((err, idea)=>{
            if(err){
                res.send(500, {message: "Something went wrong"});
            }
            res.view('edit', {idea: idea})
        })
    }
};


