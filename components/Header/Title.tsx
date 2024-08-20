const Title = () => {
    const scrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="px-[130px] fixed z-50 w-full h-16 flex items-center gap-10 bg-slate-900">
                <div
                    onClick={scrollTopHandler}
                    className="hover:text-white cursor-pointer text-2xl font-semibold flex-grow text-gray-200"
                >{`KMS's PortFolio`}</div>
                <div className="hover:text-white cursor-pointer text-gray-200 font-medium hidden lg:block">
                    About me
                </div>
                <div className="hover:text-white cursor-pointer text-gray-200 font-medium hidden lg:block">Skills</div>
                <div className="hover:text-white cursor-pointer text-gray-200 font-medium hidden lg:block">
                    Archiving
                </div>
                <div className="hover:text-white cursor-pointer text-gray-200 font-medium hidden lg:block">
                    Projects
                </div>
            </div>
        </>
    );
};

export default Title;
