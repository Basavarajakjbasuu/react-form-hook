import { useForm } from 'react-hook-form';

interface FormValues {
	username: string;
	email: string;
	channel: string;
	social: {
		instagram: string;
		linkedin: string;
	};
  phoneNumbers: string[];
  age: string;
}

const YoutubeForm = () => {
	const form = useForm<FormValues>({
		defaultValues: {
			username: '',
			email: '',
			channel: '',
			social: {
				instagram: '',
				linkedin: '',
			},
      phoneNumbers: ['', ''],
      age: ''
		},
	});

	// Managing form data
	const { register, handleSubmit, formState } = form;

	const { errors } = formState;

	// validation
	const onSubmit = (data: FormValues) => {
		console.log('Form submitted', data);
	};
	return (
    <div className="grid place-items-center px-4 pb-6">
      
			<h2 className="mb-8 text-5xl font-bold text-red-600">
				Youtube Form
			</h2>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col border-2 p-4 rounded"
				noValidate //prevent browser validation
			>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					{...register('username', {
						required: 'username is required!.',
					})}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>

				{errors && <p className="text-red-600">{errors.username?.message}</p>}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					// name="email"
					id="email"
					{...register('email', {
						required: 'Email is required!.',
						pattern: {
							value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
							message: 'Invalid Email address',
						},
						validate: {
							notAdmin: (fieldValue) =>
								fieldValue != 'admin@domain.com' || 'Enter a different email!.',

							notBlockListed: (fieldValue) =>
								!fieldValue.endsWith('baddomain.com') ||
								'This domain is not supported',
						},
					})}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
				{errors && <p className="text-red-600">{errors.email?.message}</p>}

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					// name="channel"
					id="channel"
					{...register('channel', {
						required: 'Channel name is required!.',
					})}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
				{errors && <p className="text-red-600">{errors.channel?.message}</p>}

				<label htmlFor="channel">Instagram</label>
				<input
					type="text"
					id="channel"
          {...register('social.instagram', {
            required: {
              value: true,
              message: 'Instagram handle is required',
            }
          })}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
        />
        {errors && <p className="text-red-600">{errors.social?.instagram?.message }</p> }

				<label htmlFor="channel">Linkedin</label>
				<input
					type="text"
					id="channel"
          {...register('social.linkedin', {
            required: 'Linkedin handle is required'
          })}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
        {errors && <p className='text-red-600'>{errors.social?.linkedin?.message}</p>}

				<div className="flex gap-4 mt-3">
					<div className="flex flex-col">
						<label htmlFor="channel">Primary Phone number</label>
						<input
							type="text"
							id="channel"
              {...register('phoneNumbers.0', {
                required: "Required"
              })}
							className=" w-[200px] p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
            />
            
            {errors && <p className='text-red-600'>{errors.phoneNumbers?.[0]?.message }</p>}
					</div>

					<div className="flex flex-col">
						<label htmlFor="channel">Secondary Phone number</label>
						<input
							type="text"
							id="channel"
              {...register('phoneNumbers.1', {
                required: 'Required'
              })}
							className="w-[200px] p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
            />
            {errors && <p className='text-red-600'>{errors.phoneNumbers?.[0]?.message }</p>}
					</div>
        </div>
        
        <label htmlFor="channel">Age</label>
				<input
					type="number"
					id="age"
          {...register('age', {
            required: 'age name is required!.',
            valueAsNumber: true,
            disabled: true
					})}
					className="p-2 mt-2 border-2 rounded focus:outline-none bg-gray-300 text-black"
				/>
				{errors && <p className="text-red-600">{errors.age?.message}</p>}

				<div className="grid place-items-center ">
					<button className="bg-red-600 mt-3 max-w-min p-2 px-8 rounded text-white">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default YoutubeForm;
