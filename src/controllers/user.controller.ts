import * as mongoose from 'mongoose';
import { UserSchema } from '../models/user.model';
import { Request, Response } from 'express';
import { $log } from 'ts-log-debug';

const User = mongoose.model('User', UserSchema);

export class UserController {
   
    public getUsers (req: Request, res: Response) {           
        $log.debug('Going to get all users ...');
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getAllUsersWithRole (req: Request, res: Response) {
        $log.debug(`Going to get all users with role '${req.params.role}' ...`);
        User.find({role: req.params.role}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUser (req: Request, res: Response) {
        $log.debug(`Going to get user: '${req.params.userId}' ...`);
        User.find({userId: req.params.userId}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {           
        $log.debug(`Going to update user: ${req.params.userId} with params ${JSON.stringify(req.body)} ...`);
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        $log.debug(`Going to delete user '${req.params.userId}' ...`);
        User.remove({ _id: req.params.userId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: `Successfully deleted user ! ${req.params.userId}`});
        });
    }

}