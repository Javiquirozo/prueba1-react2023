import { useState, useEffect } from "react";

const MiApi = (params) => {
    const [catFacts, setCatFacts] = useState([]);

    const filterCatFacts = catFacts.filter(
        (catFact) => catFact.fact.includes(params.search)
    ).map(fact => fact.fact);

    const catFactsSorted = filterCatFacts.sort()

    useEffect(() => {
        getFactCats();
    }, []);

    const getFactCats = async () => {
        const url = 'https://catfact.ninja/facts';
        const response = await fetch(url).then((response) => response.json());

        setCatFacts(response.data);
    }

    return (
        <div>
            {
                catFactsSorted.map((fact) => (
                    <li> { fact } </li>
                ))
            }
        </div>
    )
}

export default MiApi;