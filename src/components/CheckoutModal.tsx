import React, { useState } from 'react';
import { X, Send, User, Phone, MapPin, MessageSquare, CreditCard, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menu';
import { OrderType } from '../types';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    items,
    subtotal,
    deliveryFee,
    grandTotal,
    orderType,
    setOrderType,
    createOrder,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'Cash on Delivery' | 'Pay at Counter' | 'JazzCash / EasyPaisa'>('Cash on Delivery');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!customerName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    if (!phone.trim() || phone.trim().length < 10) {
      setErrorMessage('Please enter a valid active phone / WhatsApp number (e.g. 0333 1234567)');
      return;
    }

    if (orderType === 'delivery' && !address.trim()) {
      setErrorMessage('Please enter your delivery street address / landmark');
      return;
    }

    // Create order and close checkout modal (confirmedOrder will automatically trigger ReceiptSlipModal)
    createOrder({
      customerName: customerName.trim(),
      phone: phone.trim(),
      orderType,
      address: address.trim(),
      tableNumber: tableNumber.trim(),
      notes: notes.trim(),
      paymentMethod,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsCheckoutOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-[#11131a] border border-[#382b1c] rounded-2xl shadow-2xl text-white overflow-hidden">
          
          {/* Header */}
          <div className="bg-[#171922] px-6 py-4 border-b border-[#282016] flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-widest block">
                Direct Kitchen Dispatch
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Complete Your Order
              </h3>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Error message */}
            {errorMessage && (
              <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-lg">
                {errorMessage}
              </div>
            )}

            {/* Order Type Tabs */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Order Type
              </label>
              <div className="grid grid-cols-3 gap-2 bg-[#0c0e14] p-1 rounded-xl border border-[#261e15]">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    orderType === 'delivery'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🛵 Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('takeaway')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    orderType === 'takeaway'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🛍️ Takeaway
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('dine-in')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                    orderType === 'dine-in'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🍽️ Dine-in
                </button>
              </div>
            </div>

            {/* Customer Name */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Khan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#0a0c12] border border-[#2b2216] focus:border-amber-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Customer Phone */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="0333 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0a0c12] border border-[#2b2216] focus:border-amber-500 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                We will send the order slip and confirmation to this number.
              </span>
            </div>

            {/* Address or Table # */}
            {orderType === 'delivery' ? (
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Delivery Address & Nearby Landmark *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <textarea
                    required
                    rows={2}
                    placeholder="House/Apartment #, Street, Block, Area, Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#0a0c12] border border-[#2b2216] focus:border-amber-500 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none resize-none"
                  />
                </div>
              </div>
            ) : orderType === 'dine-in' ? (
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Table Number (Optional if already seated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Table 5 or Family Hall 2"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full bg-[#0a0c12] border border-[#2b2216] focus:border-amber-500 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none"
                />
              </div>
            ) : null}

            {/* Special Instructions */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Special Instructions / Spice Preference
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                <textarea
                  rows={2}
                  placeholder="e.g. Normal spicy, send extra green raita, extra crispy paratha..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#0a0c12] border border-[#2b2216] focus:border-amber-500 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-600 focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('Cash on Delivery')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    paymentMethod === 'Cash on Delivery'
                      ? 'bg-[#221b12] border-amber-500 text-amber-300 font-semibold'
                      : 'bg-[#0a0c12] border-[#2b2216] text-slate-300 hover:text-white'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mb-1 text-amber-400" />
                  <span>Cash on Delivery / Counter</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('JazzCash / EasyPaisa')}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    paymentMethod === 'JazzCash / EasyPaisa'
                      ? 'bg-[#221b12] border-amber-500 text-amber-300 font-semibold'
                      : 'bg-[#0a0c12] border-[#2b2216] text-slate-300 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 mb-1 text-amber-400" />
                  <span>JazzCash / EasyPaisa</span>
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-[#0b0d13] p-3.5 rounded-xl border border-[#261f15] space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Items ({items.length})</span>
                <span className="font-mono text-white">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Delivery Charges</span>
                <span className="font-mono text-white">
                  {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#211a10]">
                <span>Total Payable:</span>
                <span className="font-mono text-amber-400 text-base">
                  Rs. {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 text-sm transition-all active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Generate Official Slip & Send to WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Order will be dispatched to kitchen at {RESTAURANT_INFO.phoneFormatted}
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
