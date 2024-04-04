export function formatCardNumber(cardNumber: string): string {
   // Remove all non-numeric characters from the input
   const numericOnly = cardNumber.replace(/\D/g, '');

   // Split the string into groups of 4 characters
   const chunks = numericOnly.match(/.{1,4}/g);

   // Join the groups with a space between each group
   if (chunks) {
       return chunks.join(' ');
   }

   return '';
}
