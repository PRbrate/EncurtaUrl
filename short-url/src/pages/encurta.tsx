import { useState } from "react";
import "./page.css";
import { getUrl } from "../Services/Api";

export default function Encurta() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [shortUrl, setShortUrl] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErro("")
        setShortUrl("")

        setLoading(true);

        setTimeout(async () => {

            const response = await getUrl(url)
            if (typeof response == 'string') {
                setShortUrl(response);
            } else {
                setErro(response.erro)
            }
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Encurte seu link</h1>
                <p className="subtitle">
                    Simples, rápido e rastreável
                </p>

                <input
                    type="url"
                    placeholder="Cole seu link aqui..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="input"
                />

                <button type="submit" className="button" onClick={handleSubmit}>
                    {loading ? "Gerando..." : "Encurtar"}
                </button>

                {shortUrl && (
                    <div className="result">
                        <span>Link gerado: </span>
                        <a href={shortUrl} target="_blank" rel="noreferrer">
                            {shortUrl}
                        </a>
                    </div>
                )}
                {erro && (
                    <div className="result">
                        <span>{erro}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
