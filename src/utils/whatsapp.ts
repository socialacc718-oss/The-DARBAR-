import { CustomerOrder } from '../types';
import { RESTAURANT_INFO } from '../data/menu';

export function generateWhatsAppMessage(order: CustomerOrder): string {
  const dateStr = new Date(order.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const itemsList = order.items
    .map((item, index) => {
      const variantStr = item.selectedVariant ? ` (${item.selectedVariant.label})` : '';
      const notesStr = item.specialNotes ? `\n   Note: ${item.specialNotes}` : '';
      return `${index + 1}. *${item.item.name}${variantStr}*\n   Qty: ${item.quantity} x Rs. ${item.unitPrice.toLocaleString()} = Rs. ${(item.quantity * item.unitPrice).toLocaleString()}${notesStr}`;
    })
    .join('\n');

  let orderTypeLabel = '🛵 Home Delivery';
  if (order.orderType === 'takeaway') orderTypeLabel = '🛍️ Takeaway / Self Pickup';
  if (order.orderType === 'dine-in') orderTypeLabel = `🍽️ Dine-in (Table ${order.tableNumber || 'Pending'})`;

  let addressLine = '';
  if (order.orderType === 'delivery') {
    addressLine = `\n📍 *Address:* ${order.address || 'Not specified'}`;
  } else if (order.orderType === 'dine-in') {
    addressLine = `\n🪑 *Table No:* ${order.tableNumber || 'Self-selected'}`;
  }

  const message = `*==============================*
       *👑 THE DARBAAR | دربار*
      *دیسی ذائقہ ، شاہی انداز*
*==============================*
📋 *ORDER SLIP:* #${order.orderId}
⏰ *Time:* ${dateStr}
------------------------------
👤 *CUSTOMER DETAILS:*
• *Name:* ${order.customerName}
• *Phone:* ${order.phone}
• *Type:* ${orderTypeLabel}${addressLine}
${order.notes ? `• *Special Notes:* ${order.notes}\n` : ''}------------------------------
🍽️ *ORDERED ITEMS:*
${itemsList}
------------------------------
• *Subtotal:* Rs. ${order.subtotal.toLocaleString()}
• *Delivery Fee:* ${order.deliveryFee === 0 ? 'FREE' : `Rs. ${order.deliveryFee.toLocaleString()}`}
💰 *TOTAL AMOUNT:* *Rs. ${order.grandTotal.toLocaleString()}*
💳 *Payment Mode:* ${order.paymentMethod}
==============================
🙏 *Shukriya for choosing The Darbaar!*
📞 Helpline: ${RESTAURANT_INFO.phoneFormatted}`;

  return message;
}

export function openWhatsAppOrder(order: CustomerOrder) {
  const text = generateWhatsAppMessage(order);
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${RESTAURANT_INFO.phoneWhatsappRaw}?text=${encoded}`;
  window.open(url, '_blank');
}
