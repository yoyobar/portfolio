import { iconData } from '@/app/config/const';
import { motion } from 'framer-motion';

const AboutIcon = () => {
    return (
        <>
            <div className="hidden md:flex mt-20 justify-center gap-4 px-8 py-2 mb-4">
                {iconData.map((icon) => (
                    <div key={icon.label}>
                        <motion.div whileHover={{ scale: 0.95 }} className="about-icon rounded-t-sm w-12 h-12">
                            {icon.icon}
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AboutIcon;
