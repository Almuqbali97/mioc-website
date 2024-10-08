// import { oosMembershipCollection } from '../models/oosMembershipsModel.js';
import { getOosMembershipCollection } from '../models/oosMembershipsModel.js';


export const getSpecificMembership = async (req, res) => {
    const oosMembershipCollection = getOosMembershipCollection();
    const { id } = req.params;
    try {
        const membership = await oosMembershipCollection.findOne({ membership_id: id.toUpperCase() });
        if (!membership) {
            return res.status(404).json({ message: 'Membership not found' });
        }
        return res.status(200).json(membership);
    } catch (error) {
        console.error('Error fetching membership:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllMemberships = async (req, res) => {
    const oosMembershipCollection = getOosMembershipCollection();
    try {
        const memberships = await oosMembershipCollection.find().toArray();
        res.status(200).json(memberships);
    } catch (error) {
        console.error('Error fetching memberships:', error);
        res.status(500).json({ message: 'An error occurred while fetching memberships.' });
    }
}
// await oosMembershipCollection.insertMany(moreContacts)




