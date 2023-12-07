function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
                Trương Đăng Quang
            </h1>
            <p className='text-base md:text-xl mb-3 font-medium'>
                Postgraduate student || Currently focusing on learning web
                development
            </p>
            <p className='text-sm max-w-xl mb-6 font-bold'>
                <p>
                    👋 I&apos;m a postgraduate student on a mission to conquer
                    the vast world of web development. Currently navigating the
                    realms of academia while fine-tuning my coding skills, I
                    find myself in the fascinating dance between lines of code
                    and the endless possibilities they unlock.
                </p>
                {/* <p>
                    From HTML to JavaScript, I&apos;m weaving my way through the
                    digital landscape, seeking to create not just websites but
                    experiences that leave an impression. While my days may be
                    filled with syntax and algorithms, my nights are lost in the
                    captivating world of books, and occasionally indulging in
                    some good old video gaming.
                </p> */}
                <p>
                    You can find more about my information{' '}
                    <a
                        href='#footer'
                        className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
                    >
                        here
                    </a>
                </p>
            </p>
        </div>
    );
}

export default Intro;
