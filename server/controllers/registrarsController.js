// import { registrationListCollection } from '../models/registrationListModel.js';
import { getRegistrationListCollection } from '../models/registrationListModel.js';



export const getAllRegistrations = async (req, res) => {
    const registrationListCollection = getRegistrationListCollection();
    try {
        const registrants = await registrationListCollection.find().toArray();
        res.status(200).json(registrants);
    } catch (error) {
        console.error('Error fetching registrants:', error);
        res.status(500).json({ message: 'An error occurred while fetching registrants.' });
    }
}

export const getSpesificRegistration = async (req, res) => {
    const registrationListCollection = getRegistrationListCollection();
    const { id } = req.params;

    try {
        const registration = await registrationListCollection.findOne({ id });

        if (!registration) {
            return res.status(404).json({ message: 'registration not found' });
        }

        return res.status(200).json(registration);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Something went wrong, please try again' });
    }
}