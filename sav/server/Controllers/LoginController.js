module.exports.Login = (req, res, next) => {
    const email = req.body.email.toloWercase();
    const password = req.body.password;
    User.findOne({
        where: {
            email: email
        }
    })
        .then(function(user, err) {
            if (err) {
                console.log(err);
                res.status(500).json({
                    error: 'Internale server error',
                    auth: false
                });
            } else if (!user) {
                res.status(401).json({
                    error: 'User does not exist',
                    auth: false
                });
            } else {
                user.authentificate(password, function(err, same) {
                    if (err) {
                        res.status(500).json({
                            error: 'Internale server error',
                            auth: false
                        });
                    } else if (!same) {
                        res.status(401).json({
                            error: 'Password incorrect',
                            auth: false
                        });
                    } else {
                        const token = jwt.sign({ id: user.id }, config.secret, {
                            expiresIn: 36000
                        });
                        res.json({
                            token: token,
                            expiresIn: 36000,
                            message: "Welcome",
                            user: User,
                            error: false,
                            auth: true
                        });
                    }
                });
            }
        })
        .catch(err => console.log(err));
};