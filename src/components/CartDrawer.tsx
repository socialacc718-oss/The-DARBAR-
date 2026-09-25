import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Store, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/menu';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    grandTotal,
    orderType,
    setOrderType,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const freeDeliveryRemaining = RESTAURANT_INFO.freeDeliveryThreshold - subtotal;
  const isFreeDeliveryEligible = subtotal >= RESTAURANT_INFO.freeDeliveryThreshold;

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Centered Modal Container */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6 relative z-10">
        <div className="w-full max-w-2xl bg-[#0f1118] border border-[#3e3020] rounded-2xl sm:rounded-3xl text-white flex flex-col shadow-2xl overflow-hidden my-4 max-h-[92vh]">
          
          {/* Header */}
          <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-[#251e15] bg-[#141620] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#211a10] border border-[#443520] flex items-center justify-center text-amber-400 shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Your Order Cart</h3>
                <span className="font-urdu text-xs sm:text-sm text-amber-400">شاہی دسترخوان آرڈر لسٹ</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-red-400 transition-colors px-2 py-1"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-5">
            
            {/* Order Type Toggle */}
            <div className="bg-[#151722] p-1.5 rounded-xl border border-[#2b2216] grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setOrderType('delivery')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  orderType === 'delivery'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Truck className="w-4 h-4" />
                <span>Delivery</span>
              </button>
              
              <button
                onClick={() => setOrderType('takeaway')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  orderType === 'takeaway'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Takeaway</span>
              </button>

              <button
                onClick={() => setOrderType('dine-in')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  orderType === 'dine-in'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>Dine-in</span>
              </button>
            </div>

            {/* Free Delivery Bar */}
            {orderType === 'delivery' && (
              <div className="bg-[#181a24] p-3.5 rounded-xl border border-[#292218] text-xs sm:text-sm">
                {isFreeDeliveryEligible ? (
                  <p className="text-emerald-400 font-semibold flex items-center gap-2">
                    <span>🎉 You've unlocked FREE Home Delivery!</span>
                  </p>
                ) : (
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1.5">
                      <span>Add Rs. {freeDeliveryRemaining.toLocaleString()} for free delivery</span>
                      <span className="font-mono text-amber-300 font-semibold">
                        Rs. {subtotal} / {RESTAURANT_INFO.freeDeliveryThreshold}
                      </span>
                    </div>
                    <div className="w-full bg-[#0d0f14] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-400 h-full transition-all duration-300"
                        style={{
                          width: `${Math.min(100, (subtotal / RESTAURANT_INFO.freeDeliveryThreshold) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Items List */}
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1b1710] border border-[#3b2b1a] flex items-center justify-center mx-auto mb-4 text-amber-400/80">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-200 mb-1">
                  Your cart is empty
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto mb-6">
                  Explore our aromatic biryanis, BBQ, and karahi dishes to begin your royal feast.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-colors shadow-lg"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((cartItem) => {
                  const itemTotal = cartItem.quantity * cartItem.unitPrice;
                  return (
                    <div
                      key={cartItem.cartItemId}
                      className="bg-[#14161f] border border-[#2b2216] rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-amber-600/40 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {cartItem.item.name}
                          </h4>
                          {cartItem.selectedVariant && (
                            <span className="text-xs text-amber-400 font-semibold bg-[#221b12] px-2 py-0.5 rounded-md border border-[#3e3020]">
                              {cartItem.selectedVariant.label}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-mono text-xs sm:text-sm text-slate-400 tabular-nums">
                            Rs. {cartItem.unitPrice.toLocaleString()} each
                          </span>
                        </div>
                      </div>

                      {/* Steppers & Total Price on right */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#231b12]">
                        <div className="flex items-center bg-[#0d0f14] border border-[#2b2216] rounded-xl">
                          <button
                            onClick={() =>
                              updateQuantity(cartItem.cartItemId, cartItem.quantity - 1)
                            }
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-mono text-xs sm:text-sm font-bold text-white tabular-nums">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(cartItem.cartItemId, cartItem.quantity + 1)
                            }
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right min-w-[90px]">
                          <span className="font-mono text-sm sm:text-base font-extrabold text-amber-300 tabular-nums block">
                            Rs. {itemTotal.toLocaleString()}
                          </span>
                        </div>

                        <button
                          onClick={() => removeFromCart(cartItem.cartItemId)}
                          className="p-2 text-slate-500 hover:text-red-400 transition-colors rounded-lg hover:bg-[#1f1616]"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Footer Checkout Summary with Large Clear Pricing */}
          {items.length > 0 && (
            <div className="px-5 sm:px-7 py-5 border-t border-[#251e15] bg-[#0c0e14] space-y-4">
              <div className="space-y-2 text-xs sm:text-sm text-slate-300 bg-[#12141c] p-4 rounded-xl border border-[#261f15]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono tabular-nums text-white font-semibold">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>
                    Delivery Fee {orderType !== 'delivery' && '(Self Pickup / Dine-in)'}
                  </span>
                  <span className="font-mono tabular-nums">
                    {orderType !== 'delivery' ? (
                      <span className="text-slate-500 font-semibold">Rs. 0</span>
                    ) : deliveryFee === 0 ? (
                      <span className="text-emerald-400 font-bold">FREE</span>
                    ) : (
                      <span className="text-white font-semibold">Rs. {deliveryFee.toLocaleString()}</span>
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base sm:text-lg font-bold text-white pt-2.5 border-t border-[#261f15]">
                  <span>Grand Total</span>
                  <span className="font-mono text-amber-300 text-lg sm:text-xl font-extrabold tabular-nums">
                    Rs. {grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#352718] text-slate-300 hover:text-white hover:bg-[#181a24] text-xs sm:text-sm font-semibold transition-colors"
                >
                  Continue Browsing
                </button>

                <button
                  onClick={handleCheckout}
                  className="w-full flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold py-3.5 px-6 rounded-xl shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2 text-sm sm:text-base transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <span>Proceed to Order Slip & WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[11px] sm:text-xs text-center text-slate-500">
                Order slip will be generated & sent directly to WhatsApp ({RESTAURANT_INFO.phoneFormatted})
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
