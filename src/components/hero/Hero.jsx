import logo from '/vite.svg';

export function Hero() {

    const imgStyle = {
        height: '15rem',
    };

    return (
        <section>
            <div>
                <h1>Next Generation Frontend Tooling</h1>
                <p>Get ready for a development environment that can finally catch up with you.</p>
            </div>
            <div>
                <a href="#">Get Started</a>
                <a href="#">Why Vite?</a>
                <a href="#">View on GitHub</a>
                <a href="#">⚡ ViteConf 24!</a>
            </div>
            <img src={logo} style={imgStyle} alt="Vite image" />
        </section>
    );
}