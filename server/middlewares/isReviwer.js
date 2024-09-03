export const isRevewier = (req, res, next) => {
    const reviewers = [
        "drrikin@gmail.com",
        "SawsanAl.bloushi@gmail.com",
        "tr.saifbanioraba@gmail.com",
        "walugail@yahoo.co.uk",
        "rashid3099@hotmail.com",
        "nisreenasser87@gmail.com",
        "umali_mahrezi@yahoo.com",
        "dr.masoomian@yahoo.com",
        "m.mameesh@gmail.com",
        "sajinidurairaj@yahoo.co.in",
        "asooy927@gmail.com",
        "alfarsi52888@gmail.com",
        "draliraza12@gmail.com",
        "kisheyeh@gmail.com",
        "almahrouqi.h@gmail.com",
        "sreelathasantosh@gmail.com",
        "predev28@gmail.com",
        "amal_alaliyani@icloud.com",
        "dr.shihab89@gmail.com",
        "optomnoufal@gmail.com",
        "ashokabandara75@gmail.com",
        "almuqbalimusab@gmail.com",
        "mqbali97@gmail.com",
    ];
    if (req.user && reviewers.includes(req.user.email)) {
        next();
    } else {
        return res.status(401).json({ message: 'You are not authorized as reviwer' });
    }
};
