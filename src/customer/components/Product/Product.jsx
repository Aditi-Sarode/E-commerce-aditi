'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { mens_kurta } from '../../../Data/mens_kurta'
import ProductCard from './ProductCard'
import { filters, singleFilter } from './FilterData' // Assuming filters includes color and size
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    size: [],
    price: '',
    discountPrice: '',
    availability: ''
  })

  const navigate = useNavigate()
  const location = useLocation()

  // Update filters from URL parameters on first load
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const color = searchParams.get('color')?.split(',') || []
    const size = searchParams.get('size')?.split(',') || []
    const price = searchParams.get('price') || ''
    const discountPrice = searchParams.get('discountPrice') || ''
    const availability = searchParams.get('availability') || ''

    setSelectedFilters({ color, size, price, discountPrice, availability })
  }, [location.search])

  // Handle the checkbox filter change and update the URL (for color and size)
  const handleFilterChange = (value, sectionId) => {
    const updatedFilters = { ...selectedFilters }

    // Toggle the selection
    if (updatedFilters[sectionId].includes(value)) {
      updatedFilters[sectionId] = updatedFilters[sectionId].filter((item) => item !== value)
    } else {
      updatedFilters[sectionId].push(value)
    }

    setSelectedFilters(updatedFilters)
    updateURL(updatedFilters)
  }

  // Handle the radio filter change and update the URL (for price, discountPrice, availability)
  const handleRadioFilterChange = (value, sectionId) => {
    const updatedFilters = { ...selectedFilters }
    updatedFilters[sectionId] = value

    setSelectedFilters(updatedFilters)
    updateURL(updatedFilters)
  }

  // Update the URL based on selected filters
  const updateURL = (filters) => {
    const searchParams = new URLSearchParams()

    if (filters.color.length) searchParams.set('color', filters.color.join(','))
    if (filters.size.length) searchParams.set('size', filters.size.join(','))
    if (filters.price) searchParams.set('price', filters.price)
    if (filters.discountPrice) searchParams.set('discountPrice', filters.discountPrice)
    if (filters.availability) searchParams.set('availability', filters.availability)

    navigate({ search: searchParams.toString() })
  }

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              value={option.value}
                              checked={selectedFilters[section.id].includes(option.value)}
                              onChange={() => handleFilterChange(option.value, section.id)}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
            <div className="flex items-center">
              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* Color and Size Filter */}
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              value={option.value}
                              checked={selectedFilters[section.id].includes(option.value)}
                              onChange={() => handleFilterChange(option.value, section.id)}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Price Filter */}
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">Price</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                        <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Price"
                        name="price-group"
                        value={selectedFilters.price}
                        onChange={(e) => handleRadioFilterChange(e.target.value, 'price')}
                      >
                        <FormControlLabel value="399-999" control={<Radio />} label="₹399 To ₹999" />
                        <FormControlLabel value="999-1999" control={<Radio />} label="₹999 To ₹1999" />
                        <FormControlLabel value="1999-2999" control={<Radio />} label="₹1999 To ₹2999" />
                        <FormControlLabel value="3999-4999" control={<Radio />} label="₹3999 To ₹4999" />
                      </RadioGroup>
                    </FormControl>
                  </DisclosurePanel>
                </Disclosure>

                {/* Discount Price Filter */}
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">Discount Range</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                        <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Discount Price"
                        name="discountPrice-group"
                        value={selectedFilters.discountPrice}
                        onChange={(e) => handleRadioFilterChange(e.target.value, 'discountPrice')}
                      >
                        <FormControlLabel value="10" control={<Radio />} label="10% And Above" />
                        <FormControlLabel value="20" control={<Radio />} label="20% And Above" />
                        <FormControlLabel value="30" control={<Radio />} label="30% And Above" />
                        <FormControlLabel value="40" control={<Radio />} label="40% And Above" />
                        <FormControlLabel value="50" control={<Radio />} label="50% And Above" />
                        <FormControlLabel value="60" control={<Radio />} label="60% And Above" />
                        <FormControlLabel value="70" control={<Radio />} label="70% And Above" />
                        <FormControlLabel value="80" control={<Radio />} label="80% And Above" />
                      </RadioGroup>
                    </FormControl>
                  </DisclosurePanel>
                </Disclosure>

                {/* Availability Filter */}
                <Disclosure as="div" className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">Availability</span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                        <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Availability"
                        name="availability-group"
                        value={selectedFilters.availability}
                        onChange={(e) => handleRadioFilterChange(e.target.value, 'availability')}
                      >
                        <FormControlLabel value="InStock" control={<Radio />} label="In Stock" />
                        <FormControlLabel value="OutOfStock" control={<Radio />} label="Out Of Stock" />
                      </RadioGroup>
                    </FormControl>
                  </DisclosurePanel>
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className='flex flex-wrap justify-center bg-white py-5'>
                  {mens_kurta.map((item) => <ProductCard key={item.id} product={item} />)}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
