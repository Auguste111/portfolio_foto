import React from 'react';
import { Lightbulb, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Lighting() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif text-white mb-12 border-b border-brand-accent/30 pb-4 inline-block"
            >
                Lichtplan
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Studio Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Lightbulb className="h-6 w-6 text-brand-accent" />
                        <h3 className="text-2xl font-serif text-white">Studio Opstelling</h3>
                    </div>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        Voor de portretten en productfotografie maak ik gebruik van een driepuntsbelichting.
                        Hieronder is de schematische weergave van de studio-opstelling.
                    </p>

                    {/* CSS/SVG Diagram Representation */}
                    <div className="aspect-square bg-neutral-900 rounded-lg relative overflow-hidden border border-white/5 shadow-inner">
                        {/* Center Subject */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center text-xs text-gray-500 z-10">
                            Subject
                        </div>

                        {/* Key Light */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-8 h-8 bg-brand-accent rounded-full shadow-[0_0_50px_20px_rgba(212,175,55,0.3)] animate-pulse"></div>
                            <div className="absolute top-10 left-0 w-max text-xs text-brand-accent font-mono uppercase tracking-wider">Key Light</div>
                        </motion.div>

                        {/* Fill Light */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="w-6 h-6 bg-white/50 rounded-full shadow-[0_0_30px_10px_rgba(255,255,255,0.1)]"></div>
                            <div className="absolute top-8 right-0 w-max text-xs text-gray-400 font-mono uppercase tracking-wider">Fill Light</div>
                        </motion.div>

                        {/* Back Light */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1, duration: 0.5 }}
                            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 transform translate-y-1/2"
                        >
                            <div className="w-6 h-6 bg-white/30 rounded-full shadow-[0_0_20px_5px_rgba(255,255,255,0.05)]"></div>
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-max text-xs text-gray-500 font-mono uppercase tracking-wider">Back/Rim</div>
                        </motion.div>

                        {/* Light Beams (simulated) */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 left-1/4 w-full h-1 bg-gradient-to-r from-brand-accent/20 to-transparent transform rotate-45 origin-left blur-sm"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Natural Light */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Sun className="h-6 w-6 text-brand-accent" />
                        <h3 className="text-2xl font-serif text-white">Natuurlijk Licht</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Bij architectuur en landschap is de zon mijn primaire lichtbron. Planning is cruciaal.
                        Mijn aanpak omvat het bestuderen van de zonnestand en weersvoorspelling.
                    </p>
                    <ul className="space-y-6">
                        {[
                            { title: 'Golden Hour', desc: 'Warme tinten, lange schaduwen. Ideaal voor landschap en portret op locatie.' },
                            { title: 'Blue Hour', desc: 'Koel licht voor zonsopkomst of na zonsondergang. Perfect voor stadsarchitectuur.' },
                            { title: 'Hard Light', desc: 'Midden op de dag. Gebruikt voor high-contrast zwart-wit architectuur.' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,1)]" />
                                <div>
                                    <strong className="block text-white font-serif mb-1">{item.title}</strong>
                                    <span className="text-gray-400 text-sm">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
