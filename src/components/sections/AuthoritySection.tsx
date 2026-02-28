import React from 'react';

export default function AuthoritySection() {
    return (
        <section className="w-full bg-[#0B0B0B] py-[100px] overflow-hidden relative z-10 font-sans">

            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">

                {/* Left Column: Image with Red Circle Background */}
                <div className="relative min-h-[500px] lg:h-[700px] w-full flex items-center justify-center">

                    {/* Huge Solid Red Circle Graphic */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] bg-[#E50914] rounded-full z-0 flex items-center justify-center overflow-hidden">
                        {/* Subtle internal abstract geometric pattern (optional, based on ref 3) */}
                        <div className="text-black/20 font-[900] text-[400px] leading-none select-none italic absolute right-[-50px] top-[0px]">DKS</div>
                    </div>

                    <img
                        src="/daniel-soares-1.png"
                        alt="Daniel Soares - Fundador DKS Marketing"
                        className="relative z-10 w-full max-w-[450px] h-auto object-contain drop-shadow-2xl translate-y-[20px]"
                    />

                    {/* Bottom Fade to blend with section background */}
                    <div className="absolute bottom-[-10%] left-0 w-full h-[150px] bg-gradient-to-t from-[#0B0B0B] to-transparent z-20"></div>
                </div>

                {/* Right Column: Copy */}
                <div className="flex flex-col items-start z-30">

                    <h2 className="text-[32px] md:text-[48px] font-[800] text-white leading-[1.2] tracking-[-1px] mb-[32px]">
                        A metodologia validada que já transformou centenas de restaurantes em referências digitais e multiplicou seu faturamento
                    </h2>

                    <div className="space-y-[24px] text-[#A1A1AA] text-[18px] leading-[1.7]">
                        <p>
                            Chega de gastar dinheiro com marketing que não traz retorno. Nossa assessoria é 100% especializada no setor gastronômico, com um time que vive e respira restaurantes.
                        </p>
                        <p>
                            Entendemos suas dores, conhecemos seu público e sabemos exatamente o que funciona para fazer seu negócio crescer de forma previsível e escalável.
                        </p>
                    </div>

                </div>

            </div>

            {/* Bottom Transition Header linking to the next section */}
            <div className="w-full text-center mt-[120px] mb-[-40px] px-6">
                <h3 className="text-[28px] md:text-[36px] font-[800] text-white leading-[1.3] tracking-[-0.5px]">
                    Com uma metodologia validada e um time especializado <br className="hidden md:block" />
                    em marketing gastronômico, ajudamos você a:
                </h3>
            </div>

        </section>
    );
}
