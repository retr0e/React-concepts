export default function Section({ title, children, ...props }) {
  return (
    // using "...props" it is easy to forward the wrapped elements like CSS styling
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
