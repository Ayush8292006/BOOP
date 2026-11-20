import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PetCategory } from '../../types';
import { X, User, Heart, Plus, Trash2, Sparkles, Dog, Cat } from 'lucide-react';

export const PetProfileModal: React.FC = () => {
  const {
    petProfileModalOpen,
    setPetProfileModalOpen,
    userPets,
    addUserPet,
    removeUserPet,
    wishlist,
    setWishlistDrawerOpen,
  } = useShop();

  const [isAdding, setIsAdding] = useState(false);
  const [newPetName, setNewPetName] = useState('');
  const [newPetType, setNewPetType] = useState<PetCategory>('Dogs');
  const [newPetBreed, setNewPetBreed] = useState('');
  const [newPetAge, setNewPetAge] = useState('');

  if (!petProfileModalOpen) return null;

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPetName.trim()) return;
    addUserPet({
      name: newPetName.trim(),
      type: newPetType,
      breed: newPetBreed.trim() || 'Companion',
      age: newPetAge.trim() || '1 Year',
    });
    setNewPetName('');
    setNewPetBreed('');
    setNewPetAge('');
    setIsAdding(false);
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setPetProfileModalOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Dialog */}
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-lg w-full shadow-2xl border border-beige-border overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-beige-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-caramel" />
            <h3 className="font-display font-bold text-base sm:text-lg text-chocolate">
              My Pet Family &amp; Profile
            </h3>
          </div>
          <button
            onClick={() => setPetProfileModalOpen(false)}
            className="p-1.5 rounded-full hover:bg-beige-light text-chocolate transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Welcome Pet Parent Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-beige to-[#FAF3EA] border border-beige-border flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-chocolate text-beige flex items-center justify-center text-xl font-bold">
              🐾
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-chocolate">
                Welcome, Pet Parent!
              </h4>
              <p className="text-xs text-chocolate/70">
                Personalize BOOP STORE with your furry &amp; aquatic companions.
              </p>
            </div>
          </div>

          {/* Registered Pets List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                Your Registered Pets ({userPets.length})
              </h4>
              {!isAdding && (
                <button
                  onClick={() => setIsAdding(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-caramel hover:text-chocolate transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add a Pet</span>
                </button>
              )}
            </div>

            {userPets.map((pet) => (
              <div
                key={pet.id}
                className="p-3.5 bg-white rounded-2xl border border-beige-border flex items-center justify-between gap-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-beige-light flex items-center justify-center text-xl">
                    {pet.type === 'Dogs' ? '🐶' : pet.type === 'Cats' ? '🐱' : pet.type === 'Aquatics' ? '🐠' : '🐾'}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-chocolate flex items-center gap-1.5">
                      <span>{pet.name}</span>
                      <span className="text-[10px] font-semibold text-caramel bg-caramel/10 px-2 py-0.5 rounded-full">
                        {pet.type}
                      </span>
                    </h5>
                    <p className="text-xs text-chocolate/60">
                      {pet.breed} • {pet.age}
                    </p>
                  </div>
                </div>

                {userPets.length > 1 && (
                  <button
                    onClick={() => removeUserPet(pet.id)}
                    className="text-chocolate/30 hover:text-red-500 transition-colors p-1"
                    title="Remove pet profile"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Pet Form */}
          {isAdding && (
            <form onSubmit={handleAddSubmit} className="p-4 bg-white rounded-2xl border border-caramel/40 space-y-3 animate-fadeIn">
              <h5 className="text-xs font-bold text-chocolate uppercase tracking-wider">
                Add New Pet Companion
              </h5>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-chocolate/70 mb-1">
                    Pet's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coco"
                    value={newPetName}
                    onChange={(e) => setNewPetName(e.target.value)}
                    className="w-full bg-beige-light/50 border border-beige-border rounded-xl p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-chocolate/70 mb-1">
                    Pet Type
                  </label>
                  <select
                    value={newPetType}
                    onChange={(e) => setNewPetType(e.target.value as PetCategory)}
                    className="w-full bg-beige-light/50 border border-beige-border rounded-xl p-2 text-chocolate focus:outline-none focus:border-caramel"
                  >
                    <option value="Dogs">Dog</option>
                    <option value="Cats">Cat</option>
                    <option value="Small Pets">Small Pet</option>
                    <option value="Birds">Bird</option>
                    <option value="Reptiles">Reptile</option>
                    <option value="Aquatics">Aquatic / Fish</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-chocolate/70 mb-1">
                    Breed
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Beagle / Persian"
                    value={newPetBreed}
                    onChange={(e) => setNewPetBreed(e.target.value)}
                    className="w-full bg-beige-light/50 border border-beige-border rounded-xl p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-chocolate/70 mb-1">
                    Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 8 Months"
                    value={newPetAge}
                    onChange={(e) => setNewPetAge(e.target.value)}
                    className="w-full bg-beige-light/50 border border-beige-border rounded-xl p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3 py-1.5 rounded-xl border border-beige-border text-xs text-chocolate/70 hover:bg-beige-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-chocolate text-beige text-xs font-bold hover:bg-chocolate-light"
                >
                  Save Companion
                </button>
              </div>
            </form>
          )}

          {/* Quick link to Wishlist */}
          <div className="pt-2 border-t border-beige-border">
            <button
              onClick={() => {
                setPetProfileModalOpen(false);
                setWishlistDrawerOpen(true);
              }}
              className="w-full p-3 bg-white rounded-2xl border border-beige-border hover:border-caramel/40 flex items-center justify-between text-xs text-chocolate font-semibold transition-all"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Saved Pet Wishlist Items ({wishlist.length})</span>
              </div>
              <span className="text-caramel">&rarr;</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
