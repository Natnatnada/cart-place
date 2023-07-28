export function Filters() {
    return (
        <>
            <section className="filters">
                <div>
                    <label htmlFor="price" className="price">Precio</label>
                    <input type="range" className=""
                        id="price"
                        min="0"
                        max="5000"
                    />
                </div>
            </section>
        </>
    )
}