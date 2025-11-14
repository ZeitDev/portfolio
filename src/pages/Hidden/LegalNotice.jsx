const LegalNotice = () => {
    return (
        <main className="pt-[5rem] bg-[#04081A] text-white min-h-screen">
            <section className="hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="relative text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Legal Notice
                        </h1>
                    </div>

                    <div className="space-y-8 max-w-3xl text-left">
                        <section className="bg-white/5 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                                Information pursuant to Sect. 5 German Telemedia Act (TMG)
                            </h2>
                            <p>Léon Zeitler</p>
                            <p>Adolf-Wagner-Straße 10</p>
                            <p>21073 Hamburg</p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact</h2>
                            <p>
                                <a
                                    href="mailto:contact@leonzeitler.com"
                                    className="text-blue-400 hover:underline"
                                >
                                    contact@leonzeitler.com
                                </a>
                            </p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                                Person responsible for editorial
                            </h2>
                            <p>Léon Zeitler</p>
                            <p>Adolf-Wagner-Straße 10</p>
                            <p>21073 Hamburg</p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                                Dispute resolution proceedings in front of a consumer arbitration board
                            </h2>
                            <p>
                                We are not willing or obliged to participate in dispute resolution
                                proceedings in front of a consumer arbitration board.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LegalNotice;