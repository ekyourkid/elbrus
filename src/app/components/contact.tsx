import React from "react"

const Contact = () => {

    return (
        <main>
            <div className="flex flex-col space-y-3 p-5" style={{backgroundImage: 'url(./images/maps-1.jpeg)'}}>
            {/* media screen for XS - MD */}
                <div className="lg:hidden text-xl font-bold uppercase text-black">contact us <span className="text-red-600">.</span></div>
                <div className="lg:hidden bg-white w-full p-5 space-y-3 rounded-lg shadow-sm shadow-black">
                    <h1 className="text-lg sm:text-xl font-medium">Feedback Form</h1>
                    <section className="space-y-5 p-2 md:p-5 md:text-lg">
                        <h1>
                            Name
                        </h1>
                        <hr />
                        <h1>
                            E-mail
                        </h1>
                        <hr />
                        <h1>
                            Phone
                        </h1>
                        <hr />
                        <h1>
                            Message
                        </h1>
                        <hr />
                    </section>
                    <section className="w-full bg-green-300">
                        <button className="bg-[#423737] text-white w-full font-bold uppercase p-2 hover:bg-red-500">send message</button>
                    </section>
                </div>

                {/* media screen for LG - 2XL */}
                <div className="hidden lg:flex justify-between items-end space-x-">
                    <article className=" flex justify-start w-full  ">
                        <h1 className="uppercase text-5xl font-bold cursor-default">
                            contact us <span className="text-red-600">.</span>
                        </h1>
                    </article>
                    <article className="bg-white h-96 w-1/2 p-3 rounded-lg shadow-sm shadow-black space-y-1">
                        <h1 className="text-xl">
                            Feedback Form
                        </h1>
                        <section className="text-lg p-2 space-y-5">
                            <h1>
                                Name
                            </h1>
                            <hr />
                            <h1>
                                E-mail
                            </h1>
                            <hr />
                            <h1>
                                Phone
                            </h1>
                            <hr />
                            <h1>
                                Message
                            </h1>
                            <hr />
                        </section>
                        <section className="w-full bg-[#423737] text-center hover:bg-red-500 ">
                            <button className=" uppercase p-2 text-xl font-bold text-white hover:bg-red-500">
                                send message
                            </button>
                        </section>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Contact