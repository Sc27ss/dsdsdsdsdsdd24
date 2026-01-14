export const WHATSAPP_PHONE = '573207702522';

export function whatsappUrlForMessage(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppForProduct(productName: string) {
  const message = `Hola, estoy interesado en uno de sus productos de soluciones industriales.\nMe gustaría recibir más información sobre ${productName}.`;
  const url = whatsappUrlForMessage(message);
  window.open(url, '_blank');
}
