export default function Tabs({ children, buttons, ButtonsContainer }) {
  /* You must create a custom component in order to tell React that it should look
  /  for the mark (in this case built-in mark).
  /  You can also change the name of parameter to be uppercase but do not forget
  /  to change the name also in the element that will pass this parameter */

  // "Remap" operation (below)
  //   const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
