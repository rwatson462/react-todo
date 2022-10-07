
const ProgressBar = ({max, progress}) => (
    <section>
        <progress max={max} value={progress}>{progress}</progress>
    </section>
)

export default ProgressBar
