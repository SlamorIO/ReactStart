import { CORE_CONCEPTS } from './../data'
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item} />)}
            </ul>
        </section>
    )
}