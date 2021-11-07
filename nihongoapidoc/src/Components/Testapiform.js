import React from 'react'

function testApiForm() {
    return (
        <div>
            <form className="Pannel">
                <div>
                    <ol>
                        <div className="btnlist">
                        <label>Alphabet</label>
                            <li><button className="btn" type="button">Hiragana</button></li>
                            <li><button className="btn" type="button">Katakana</button></li>
                            <li><button className="btn" type="button">Kanji</button></li>
                            <li><button className="btn" type="button">Kanji JLPT</button></li>
                            <li><button className="btn" type="button">Kanji GRADES</button></li>
                        </div>
                    </ol>
                </div>
            </form>
        </div>
    )
}

export default testApiForm
