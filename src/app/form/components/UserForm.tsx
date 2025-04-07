import { FC, useState } from 'react';

interface UserFormProps {
  onSubmit: (data: Record<string, string>) => void;
}

type FormErrors = Record<string, string>;

const UserForm: FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    agreeTerms: false
  });
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'firstName':
        return value ? '' : 'First name is required';
      case 'lastName':
        return value ? '' : 'Last name is required';
      case 'email':
        return /^\S+@\S+\.\S+$/.test(value as string) ? '' : 'Valid email is required';
      case 'password':
        return (value as string).length >= 6 ? '' : 'Password must be at least 6 characters';
      case 'confirmPassword':
        return value === formData.password ? '' : 'Passwords must match';
      case 'phone':
        return /^\d{10}$/.test(value as string) ? '' : 'Phone number must be 10 digits';
      case 'country':
        return value ? '' : 'Country is required';
      case 'agreeTerms':
        return value ? '' : 'You must agree to the terms';
      default:
        return '';
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    });
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const fieldValue = type === 'checkbox' ? checked : value;
    const error = validateField(name, fieldValue as string | boolean);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show all errors
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    setTouched(allTouched);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      // Convert boolean to string for consistent data structure
      const formDataAsStrings = Object.entries(formData).reduce((acc, [key, value]) => {
        acc[key] = typeof value === 'boolean' ? value.toString() : value;
        return acc;
      }, {} as Record<string, string>);
      
      onSubmit(formDataAsStrings);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" data-testid="user-form">
      <div className="mb-4 flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name *
          </label>
          <input
            className={`shadow appearance-none border ${touched.firstName && errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="input-firstName"
          />
          {touched.firstName && errors.firstName && (
            <p className="text-red-500 text-xs italic" data-testid="error-firstName">{errors.firstName}</p>
          )}
        </div>
        
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name *
          </label>
          <input
            className={`shadow appearance-none border ${touched.lastName && errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            data-testid="input-lastName"
          />
          {touched.lastName && errors.lastName && (
            <p className="text-red-500 text-xs italic" data-testid="error-lastName">{errors.lastName}</p>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email *
        </label>
        <input
          className={`shadow appearance-none border ${touched.email && errors.email ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="input-email"
        />
        {touched.email && errors.email && (
          <p className="text-red-500 text-xs italic" data-testid="error-email">{errors.email}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password *
        </label>
        <input
          className={`shadow appearance-none border ${touched.password && errors.password ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="input-password"
        />
        {touched.password && errors.password && (
          <p className="text-red-500 text-xs italic" data-testid="error-password">{errors.password}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password *
        </label>
        <input
          className={`shadow appearance-none border ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="input-confirmPassword"
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="text-red-500 text-xs italic" data-testid="error-confirmPassword">{errors.confirmPassword}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone Number *
        </label>
        <input
          className={`shadow appearance-none border ${touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number (10 digits)"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="input-phone"
        />
        {touched.phone && errors.phone && (
          <p className="text-red-500 text-xs italic" data-testid="error-phone">{errors.phone}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          Country *
        </label>
        <select
          className={`shadow appearance-none border ${touched.country && errors.country ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          data-testid="input-country"
        >
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
          <option value="AU">Australia</option>
          <option value="IN">India</option>
          <option value="DE">Germany</option>
          <option value="FR">France</option>
        </select>
        {touched.country && errors.country && (
          <p className="text-red-500 text-xs italic" data-testid="error-country">{errors.country}</p>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            id="agreeTerms"
            name="agreeTerms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            checked={formData.agreeTerms}
            onChange={handleChange}
            data-testid="input-agreeTerms"
          />
          <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
            I agree to the terms and conditions *
          </label>
        </div>
        {touched.agreeTerms && errors.agreeTerms && (
          <p className="text-red-500 text-xs italic" data-testid="error-agreeTerms">{errors.agreeTerms}</p>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          data-testid="submit-button"
        >
          Register
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone: '',
              country: '',
              agreeTerms: false
            });
            setTouched({});
            setErrors({});
          }}
          data-testid="reset-button"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default UserForm;