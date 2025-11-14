const PrivacyPolicy = () => {
    return (
        <main className="pt-[5rem] bg-[#04081A] text-white min-h-screen">
            <section className="px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-300 text-lg">
                            Effective Date: 29/03/2025
                        </p>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                        {/* Introduction & Organizational Info */}
                        <h2 className="text-2xl font-semibold text-purple-400">Introduction & Organizational Info:</h2>
                        <p>
                            We, at Léon Zeitler, are dedicated to serving our customers and contacts to the best of our abilities. Part of our commitment involves the responsible management of personal information collected through our website <a href="https://www.leonzeitler.com" className="text-blue-400 hover:underline">www.leonzeitler.com</a>, and any related interactions. Our primary goals in processing this information include:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Enhancing the user experience.</li>
                            <li>Conducting necessary business operations.</li>
                        </ul>
                        <p>
                            It is our policy to process personal information with the utmost respect for privacy and security. We adhere to all relevant regulations and guidelines to ensure that the data we handle is protected against unauthorized access, disclosure, alteration, and destruction. Our practices are designed to safeguard the confidentiality and integrity of your personal information, while enabling us to deliver the services you trust us with.
                        </p>
                        <p>
                            We do not have a designated Data Protection Officer (DPO) but remain fully committed to addressing your privacy concerns. Should you have any questions or require further information about how we manage personal information, please feel free to contact us at <a href="mailto:contact@leonzeitler.com" className="text-blue-400 hover:underline">contact@leonzeitler.com</a>.
                        </p>
                        <p>
                            Your privacy is our priority. We are committed to processing your personal information transparently and with your safety in mind. This commitment extends to our collaboration with third-party services that may process personal information on our behalf, such as in the case of sending invoices. Rest assured, all activities are conducted in strict compliance with applicable privacy laws.
                        </p>

                        {/* Scope and Application */}
                        <h2 className="text-2xl font-semibold text-purple-400 mt-8">Scope and Application:</h2>
                        <p>
                            Our privacy policy is designed to protect the personal information of all our stakeholders, including website visitors, registered users, and customers. Whether you are just browsing our website <a href="https://www.leonzeitler.com" className="text-blue-400 hover:underline">www.leonzeitler.com</a>, using our services as a registered user, or engaging with us as a valued customer, we ensure that your personal data is processed with the highest standards of privacy and security. This policy outlines our practices and your rights related to personal information.
                        </p>

                        {/* Data Storage and Protection */}
                        <h2 className="text-2xl font-semibold text-purple-400 mt-8">Data Storage and Protection:</h2>
                        <h3 className="text-xl font-semibold text-purple-300">Data Storage:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Personal information is stored in secure servers located in the following locations: Europe. For services that require international data transfer, we ensure that such transfers comply with all applicable laws and maintain data protection standards equivalent to those in our primary location.
                            </li>
                            <li>
                                <strong>Data Hosting Partners:</strong> We partner with reputable data hosting providers committed to using state-of-the-art security measures. These partners are selected based on their adherence to stringent data protection standards.
                            </li>
                        </ul>
                        <h3 className="text-xl font-semibold text-purple-300">Data Processing Agreements:</h3>
                        <p>
                            When we share your data with third-party service providers, we do so under the protection of Data Processing Agreements (DPAs) that ensure your information is managed in accordance with GDPR and other relevant data protection laws. These agreements mandate that third parties implement adequate technical and organizational measures to ensure the security of your data.
                        </p>
                        <h3 className="text-xl font-semibold text-purple-300">Transparency and Control:</h3>
                        <p>
                            We believe in transparency and providing you with control over your personal information. You will always be informed about any significant changes to our sharing practices, and where applicable, you will have the option to consent to such changes.
                        </p>
                        <p>
                            Your trust is important to us, and we strive to ensure that your personal information is disclosed only in accordance with this policy and when there is a justified reason to do so. For any queries or concerns about how we share and disclose personal information, please reach out to us at <a href="mailto:contact@leonzeitler.com" className="text-blue-400 hover:underline">contact@leonzeitler.com</a>.
                        </p>

                        {/* User Rights and Choices */}
                        <h2 className="text-2xl font-semibold text-purple-400 mt-8">User Rights and Choices:</h2>
                        <p>
                            At Léon Zeitler, we recognize and respect your rights regarding your personal information, in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We are committed to ensuring you can exercise your rights effectively. Below is an overview of your rights and how you can exercise them:
                        </p>
                        <h3 className="text-xl font-semibold text-purple-300">Your Rights:</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Right of Access (Article 15 GDPR):</strong> You have the right to request access to the personal information we hold about you and to obtain information about how we process it.
                            </li>
                            <li>
                                <strong>Right to Rectification (Article 16 GDPR):</strong> If you believe that any personal information we hold about you is incorrect or incomplete, you have the right to request its correction or completion.
                            </li>
                            <li>
                                <strong>Right to Erasure (‘Right to be Forgotten’) (Article 17 GDPR):</strong> You have the right to request the deletion of your personal information when it is no longer necessary for the purposes for which it was collected, among other circumstances.
                            </li>
                            <li>
                                <strong>Right to Restriction of Processing (Article 18 GDPR):</strong> You have the right to request that we restrict the processing of your personal information under certain conditions.
                            </li>
                            <li>
                                <strong>Right to Data Portability (Article 20 GDPR):</strong> You have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit those data to another controller.
                            </li>
                            <li>
                                <strong>Right to Object (Article 21 GDPR):</strong> You have the right to object to the processing of your personal information, under certain conditions, including processing for direct marketing.
                            </li>
                            <li>
                                <strong>Right to Withdraw Consent (Article 7(3) GDPR):</strong> Where the processing of your personal information is based on your consent, you have the right to withdraw that consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                            </li>
                            <li>
                                <strong>Right to Lodge a Complaint (Article 77 GDPR):</strong> You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable data protection laws.
                            </li>
                        </ul>
                        <h3 className="text-xl font-semibold text-purple-300">Exercising Your Rights:</h3>
                        <p>
                            To exercise any of these rights, please contact us at <a href="mailto:contact@leonzeitler.com" className="text-blue-400 hover:underline">contact@leonzeitler.com</a>. We will respond to your request in accordance with applicable data protection laws and within the timeframes stipulated by those laws. Please note, in some cases, we may need to verify your identity as part of the process to ensure the security of your personal information.
                        </p>
                        <p>
                            We are committed to facilitating the exercise of your rights and to ensuring you have full control over your personal information. If you have any questions or concerns about how your personal information is handled, please do not hesitate to get in touch with us.
                        </p>

                        {/* Cookies and Tracking Technologies */}
                        <h2 className="text-2xl font-semibold text-purple-400 mt-8">Cookies and Tracking Technologies:</h2>
                        <p>
                            At Léon Zeitler, we value your privacy and are committed to being transparent about our use of cookies and other tracking technologies on our website <a href="https://www.leonzeitler.com" className="text-blue-400 hover:underline">www.leonzeitler.com</a>. These technologies play a crucial role in ensuring the smooth operation of our digital platforms, enhancing your user experience, and providing insights that help us improve.
                        </p>
                        <h3 className="text-xl font-semibold text-purple-300">Understanding Cookies and Tracking Technologies:</h3>
                        <p>
                            Cookies are small data files placed on your device that enable us to remember your preferences and collect information about your website usage. Tracking technologies, such as web beacons and pixel tags, help us understand how you interact with our site and which pages you visit.
                        </p>
                        <h3 className="text-xl font-semibold text-purple-300">How We Use These Technologies:</h3>
                        <p>
                            <strong>Essential Cookies:</strong> Necessary for the website's functionality, such as authentication and security. They do not require consent.
                        </p>
                        <h3 className="text-xl font-semibold text-purple-300">Changes to Our Cookie Use:</h3>
                        <p>
                            We may update our use of cookies and tracking technologies to improve our services or comply with legal requirements. We will notify you of any significant changes and seek your consent where necessary.
                        </p>
                        <p>
                            Should you have any questions or concerns about our use of cookies and tracking technologies, please do not hesitate to contact us at <a href="mailto:contact@leonzeitler.com" className="text-blue-400 hover:underline">contact@leonzeitler.com</a>. Your privacy and the integrity of your personal data are of utmost importance to us.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;