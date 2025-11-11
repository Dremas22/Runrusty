import "../Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Run Rusty</h1>

            <p className="home-description">
                Run Rusty is an urban fashion and lifestyle brand founded in 2018 by Resego Serepa.
                Based in Rustenburg, North West, South Africa, the company specializes in customized
                clothing that combines creativity, culture, and identity.
            </p>

            <p className="home-section-title">What We Do:</p>
            <p className="home-description">
                We provide a wide range of apparel customization services, including high-quality printing,
                embroidery, and professional branding solutions.
            </p>

            <p className="home-section-title">What Makes Us Different:</p>
            <p className="home-description">
                At Run Rusty, we believe clothing is more than just fabric — it’s a statement. Every design
                reflects our passion for creativity and our dedication to delivering excellence.
            </p>

            <div className="home-vision-mission">
                <h2 className="section-heading">Vision</h2>
                <p>
                    To become South Africa’s leading urban fashion brand known for creativity,
                    quality, and cultural expression.
                </p>

                <h2 className="section-heading">Mission</h2>
                <p>
                    To empower individuals and businesses to express their identity through unique,
                    high-quality customized apparel and branding solutions, while promoting innovation,
                    collaboration, and authenticity.
                </p>
            </div>
        </div>
    );
}
