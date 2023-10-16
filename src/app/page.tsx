import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <h1>
                    Gabriel Jablanczy
                </h1>
                <div>
                    <h2 className={styles.subheading}>Staff Front End Web Developer. Currently employed at <a href="https://www.lastpass.com">LastPass</a>. Expert in Javascript, TypeScript, HTML5, CSS and numerous libraries.</h2>
                    <div>
                        <div className={styles.job}>
                            <h3>
                            <a href="http://www.lastpass.com/" target="_blank">LastPass</a><span> 2017-Present</span>
                            </h3>
                            <p>Staff Front End Web Developer at LastPass.</p>
                        </div>

                        <div className={styles.job}>
                            <h3>
                            <a href="http://www.isobar.com/us/home" target="_blank">Isobar</a><span> 2014-2017</span>
                            </h3>
                            <p>Award winning online marketing and enterprise level e-commerce experiences.<br/>Accounts: <a href="https://www.cinemax.com/" target="_blank">Cinemax,</a> Adidas, Lego, Royal Caribbean, <a href="https://exoticcars.enterprise.com/en/home.html" target="_blank">Enterprise</a></p>
                            {/* <div className="awards">
                                <h4>Award winning work at Isobar:</h4>
                                <h4>Enterprise Exotic Cars</h4>
                                <p><em>Official Nominee</em><br/>The Webby Awards - July 2016</p>
                                <h4>Lego Elves</h4>
                                <p><em>Gold General Website</em><br/>W3 Awards - November 2015</p>
                                <h4>adidas Stella Sport</h4>
                                <p><em>Webaward for Outstanding Achievement in Web Development</em><br/>Web Marketing Association - September 2015</p>
                                <h4>adidas Stella Sport</h4>
                                <p><em>Silver Hatch Awards&nbsp;2 x</em><br/>Hatch Awards - October 2015</p>
                            </div> */}
                        </div>
                        <div className={styles.job}>
                            <h3><a href="https://www.unboundcommerce.com/" target="_blank">Unbound Commerce</a><span> 2012-2014</span></h3>
                            <p>Providing mobile dedicated e-commerce web sites. <br/> Accounts: Monster Products, Icebreaker, <a href="http://m.finishline.com/" target="_blank">Finishline</a>, Jomashop</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
