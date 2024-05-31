import React from 'react';

const AuthorAgreement = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md my-11">
            <h1 className="text-2xl font-bold mb-4">Presenter Agreement</h1>
            <p className="mb-4">
                All presenting authors must agree to the following conditions when submitting an abstract:
            </p>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    Any work with human or animal subjects reported in the abstract complies with the guiding principles for experimental procedures found in the Declaration of Helsinki of the World Medical Association, and this research project has been duly cleared by my Institutional Review Board (IRB).
                </li>
                <li>
                    If the abstract is accepted, the MIOC2024 has permission to publish the abstract in printed and/or electronic formats.
                </li>
                <li>
                    Register for the meeting and pay the appropriate registration fee by the presenter registration deadline.
                </li>
                <li>
                    By submitting an abstract to the MIOC2024 and in consideration for the opportunity to be included in the congress presentations, the author(s) of the abstract hereby provides to the MIOC a non-exclusive, irrevocable, worldwide, royalty-free license to use the abstract in the MIOC electronic mediums and printed materials.
                </li>
                <li>
                    The author(s) grants the permission to reproduce his/her image (including photos) to create documentation to be published on the internet (including streaming) and to make the audio/video recording (synchro recording system), and photographs of the presentation to produce educational materials. The presentation will be reproduced in full compliance with its contents both in terms of scientific results and information, associated with the image and the data of the undersigned.
                </li>
            </ol>
        </div>
    );
}

export default AuthorAgreement;
