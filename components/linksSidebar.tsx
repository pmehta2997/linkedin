import styles from '@/styles/page.module.css'; // Adjust path as needed

export default function linksSidebar() {
    const links = ['Saved items', 'Groups', 'Newsletters', 'Events'];

    return (
        <div className={styles.sidebarlinks}>
            {links.map((item) => (
                <p key={item} className={styles.sidebarlinkitem}>{item}</p>
            ))}
        </div>
    );
}
