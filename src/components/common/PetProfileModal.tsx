import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { PetCategory } from '../../types';
import { X, User, Heart, Plus, Trash2 } from 'lucide-react';

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
      <div className="relative bg-[#FFFAF4] rounded-3xl max-w-lg w-full shadow-elevation border border-[#E8DBC9] overflow-hidden z-10 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 border-b border-[#E8DBC9] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <User className="w-4 h-4 text-caramel" />
            <h3 className="font-display font-bold text-base text-chocolate uppercase tracking-wider">
              Pet Profiles &amp; Account
            </h3>
          </div>
          <button
            onClick={() => setPetProfileModalOpen(false)}
            className="p-1 rounded text-chocolate hover:text-caramel transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <div className="p-5 rounded-2xl bg-white border border-[#E8DBC9] space-y-1">
            <h4 className="font-display font-bold text-sm text-chocolate uppercase tracking-wider">
              Personalized Pet Profile
            </h4>
            <p className="text-xs text-chocolate/70 font-light">
              Register your pets to receive personalized nutritional and enrichment recommendations.
            </p>
          </div>

          {/* Registered Pets List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                Registered Companions ({userPets.length})
              </h4>
              {!isAdding && (
                <button
                  onClick={() => setIsAdding(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-caramel hover:text-chocolate transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Companion</span>
                </button>
              )}
            </div>

            {userPets.map((pet) => (
              <div
                key={pet.id}
                className="p-4 bg-white rounded-xl border border-[#E8DBC9] flex items-center justify-between gap-3 shadow-subtle"
              >
                <div>
                  <h5 className="font-display font-bold text-sm text-chocolate flex items-center gap-2">
                    <span>{pet.name}</span>
                    <span className="text-[10px] font-bold text-caramel uppercase tracking-widest bg-[#F5E9D8] px-2 py-0.5 rounded">
                      {pet.type}
                    </span>
                  </h5>
                  <p className="text-xs text-chocolate/60 font-light mt-0.5">
                    {pet.breed} &bull; {pet.age}
                  </p>
                </div>

                {userPets.length > 1 && (
                  <button
                    onClick={() => removeUserPet(pet.id)}
                    className="text-chocolate/30 hover:text-red-600 transition-colors p-1"
                    title="Remove profile"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Add Pet Form */}
          {isAdding && (
            <form onSubmit={handleAddSubmit} className="p-5 bg-white rounded-2xl border border-caramel/50 space-y-3.5">
              <h5 className="text-[10px] font-bold text-chocolate uppercase tracking-ultra">
                Add New Companion
              </h5>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Pet's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Milo"
                    value={newPetName}
                    onChange={(e) => setNewPetName(e.target.value)}
                    className="w-full bg-[#FFFAF4] border border-[#E8DBC9] rounded-lg p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Pet Category
                  </label>
                  <select
                    value={newPetType}
                    onChange={(e) => setNewPetType(e.target.value as PetCategory)}
                    className="w-full bg-[#FFFAF4] border border-[#E8DBC9] rounded-lg p-2 text-chocolate focus:outline-none focus:border-caramel cursor-pointer"
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
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Breed / Variety
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Golden Retriever"
                    value={newPetBreed}
                    onChange={(e) => setNewPetBreed(e.target.value)}
                    className="w-full bg-[#FFFAF4] border border-[#E8DBC9] rounded-lg p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-chocolate/70 mb-1">
                    Age
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2 Years"
                    value={newPetAge}
                    onChange={(e) => setNewPetAge(e.target.value)}
                    className="w-full bg-[#FFFAF4] border border-[#E8DBC9] rounded-lg p-2 text-chocolate focus:outline-none focus:border-caramel"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-3.5 py-1.5 rounded-lg border border-[#E8DBC9] text-xs uppercase tracking-wider text-chocolate/70 hover:bg-beige-light"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-chocolate text-[#F5E9D8] text-xs font-bold uppercase tracking-wider hover:bg-chocolate-hover"
                >
                  Save Profile
                </button>
              </div>
            </form>
          )}

          {/* Quick link to Wishlist */}
          <div className="pt-2 border-t border-[#E8DBC9]">
            <button
              onClick={() => {
                setPetProfileModalOpen(false);
                setWishlistDrawerOpen(true);
              }}
              className="w-full p-4 bg-white rounded-xl border border-[#E8DBC9] hover:border-caramel flex items-center justify-between text-xs text-chocolate font-semibold transition-all shadow-subtle"
            >
              <div className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-chocolate" />
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
