import Heading from "../../layout/Heading";

export default function AdminPage() {
    return(
        <>
        <Heading title="Adminside" />
        <div className="admin-container">
            <a href="/add-content"><button className="button">Legg til innhold</button></a>
        </div>
        <a href="/update-content"><button className="button">Oppdater innhold</button></a>
        </>
    )
}