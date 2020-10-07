import blogControllers from '../blog/blog.controllers';
import {Comment} from './comment.model';
import {Post} from '../blog/blog.model';


export const create =  (req, res) => {
    console.log('in');
    const comment = new Comment();
    comment.title = req.body.title;
    comment.firstname = req.body.firstName;
    comment.body = req.body.body;
    console.log(comment.id);
    comment.save()
        .then((result) => {
            Post.findOne({_id: req.params.id}, (err, post) => {
                if(post) {
                    post.comments.push(comment);
                    post.save();
                    res.json({ message: 'Comment Created' });
                }
            });
        })
        .catch((error) => {
            res.status(500).json({ error });
        })
  };