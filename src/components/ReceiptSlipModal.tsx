import React, { useState } from 'react';
import { X, Printer, Copy, Check, MessageSquare, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menu';
import { generateWhatsAppMessage, openWhatsAppOrder } from '../utils/whatsapp';

export const ReceiptSlipModal: React.FC = () => {
  const { confirmedOrder, setConfirmedOrder } = useCart();
  const [copied, setCopied] = useState(false);

  if (!confirmedOrder) return null;

  const handleCopy = () => {
    const text = generateWhatsAppMessage(confirmedOrder);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendWhatsApp = () => {
    openWhatsAppOrder(confirmedOrder);
  };

  const formattedDate = new Date(confirmedOrder.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setConfirmedOrder(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-[#0e1017] border border-[#3d2e1c] rounded-2xl shadow-2xl text-white overflow-hidden my-6">
          
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 border-b border-emerald-700/50 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Order Slip Generated!
                </h3>
                <span className="text-xs text-emerald-300">
                  Ready to send to {RESTAURANT_INFO.phoneFormatted}
                </span>
              </div>
            </div>

            <button
              onClick={() => setConfirmedOrder(null)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Thermal / Restaurant Receipt Slip Container */}
          <div className="p-6">
            <div
              id="order-receipt-modal"
              className="bg-[#141722] border-2 border-dashed border-[#3e3020] rounded-xl p-5 text-slate-200 font-mono text-xs shadow-inner"
            >
              {/* Slip Header */}
              <div className="text-center pb-4 border-b border-dashed border-[#382b1c] space-y-1">
                <div className="font-serif text-xl font-black text-amber-300 tracking-wider">
                  THE DARBAAR
                </div>
                <div className="font-urdu text-base text-amber-400 font-bold">
                  دربار · دیسی ذائقہ ، شاہی انداز
                </div>
                <div className="text-[11px] text-slate-400">
                  Traditional Desi Cuisine · Handi & BBQ
                </div>
                <div className="text-[11px] text-amber-300/80">
                  Hotline / WhatsApp: {RESTAURANT_INFO.phoneFormatted}
                </div>
              </div>

              {/* Order Meta */}
              <div className="py-3 border-b border-dashed border-[#382b1c] space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Order ID:</span>
                  <span className="font-bold text-amber-300">#{confirmedOrder.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date & Time:</span>
                  <span>{formattedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Customer:</span>
                  <span className="font-bold text-white">{confirmedOrder.customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Contact:</span>
                  <span>{confirmedOrder.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Order Type:</span>
                  <span className="uppercase font-semibold text-amber-400">
                    {confirmedOrder.orderType === 'delivery'
                      ? '🛵 Home Delivery'
                      : confirmedOrder.orderType === 'takeaway'
                      ? '🛍️ Takeaway / Pickup'
                      : '🍽️ Dine-in'}
                  </span>
                </div>
                {confirmedOrder.orderType === 'delivery' && confirmedOrder.address && (
                  <div className="pt-1 text-[11px]">
                    <span className="text-slate-400 block">Delivery Address:</span>
                    <span className="text-white block font-sans text-xs">
                      {confirmedOrder.address}
                    </span>
                  </div>
                )}
                {confirmedOrder.orderType === 'dine-in' && confirmedOrder.tableNumber && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Table:</span>
                    <span className="text-white font-bold">{confirmedOrder.tableNumber}</span>
                  </div>
                )}
                {confirmedOrder.notes && (
                  <div className="pt-1 text-[11px]">
                    <span className="text-slate-400 block">Kitchen Instructions:</span>
                    <span className="text-amber-200 block italic font-sans text-xs">
                      "{confirmedOrder.notes}"
                    </span>
                  </div>
                )}
              </div>

              {/* Items Table */}
              <div className="py-3 border-b border-dashed border-[#382b1c]">
                <div className="flex justify-between font-bold text-[11px] text-slate-400 mb-2 border-b border-[#292015] pb-1">
                  <span className="w-1/2">ITEM / SIZE</span>
                  <span className="w-1/6 text-center">QTY</span>
                  <span className="w-1/3 text-right">TOTAL</span>
                </div>

                <div className="space-y-2">
                  {confirmedOrder.items.map((item, idx) => {
                    const itemTotal = item.quantity * item.unitPrice;
                    return (
                      <div key={idx} className="flex justify-between text-[11px] items-start">
                        <div className="w-1/2 pr-1">
                          <span className="text-white font-medium block">
                            {item.item.name}
                          </span>
                          {item.selectedVariant && (
                            <span className="text-[10px] text-amber-400 block">
                              ({item.selectedVariant.label})
                            </span>
                          )}
                        </div>
                        <div className="w-1/6 text-center tabular-nums">
                          {item.quantity}x
                        </div>
                        <div className="w-1/3 text-right font-bold text-slate-200 tabular-nums">
                          Rs. {itemTotal.toLocaleString()}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Totals */}
              <div className="py-3 space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="tabular-nums">
                    Rs. {confirmedOrder.subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Delivery Charges:</span>
                  <span className="tabular-nums">
                    {confirmedOrder.deliveryFee === 0
                      ? 'FREE'
                      : `Rs. ${confirmedOrder.deliveryFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-amber-300 pt-2 border-t border-[#382b1c]">
                  <span>GRAND TOTAL:</span>
                  <span className="font-mono text-base tabular-nums">
                    Rs. {confirmedOrder.grandTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 pt-1">
                  <span>Payment Mode:</span>
                  <span className="text-white">{confirmedOrder.paymentMethod}</span>
                </div>
              </div>

              {/* Slip Footer */}
              <div className="text-center pt-3 border-t border-dashed border-[#382b1c] text-[10px] text-slate-400 space-y-1">
                <p>*** Shukriya for choosing The Darbaar ***</p>
                <p>Quality Desi Food Prepared with Love & Royal Tradition</p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-5 space-y-3">
              
              {/* Main WhatsApp Send Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2.5 text-sm transition-all hover:scale-[1.01] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-slate-950" />
                <span>Send Order Slip to WhatsApp ({RESTAURANT_INFO.phoneFormatted})</span>
              </button>

              {/* Secondary Actions: Print and Copy */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center justify-center gap-2 bg-[#1b1e2a] hover:bg-[#242838] border border-[#3a3022] text-slate-200 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>Print / Save Slip</span>
                </button>

                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 bg-[#1b1e2a] hover:bg-[#242838] border border-[#3a3022] text-slate-200 py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copy Slip Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  onClick={() => setConfirmedOrder(null)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Close & Continue Browsing
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
