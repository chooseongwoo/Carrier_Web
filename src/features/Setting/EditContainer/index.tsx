import { useState, useRef } from 'react';
import * as s from './style.css';
import PencilIcon from 'pages/Setting/ui/PencilIcon';

interface InputContainerProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputContainer = ({
  label,
  value,
  onChange,
  placeholder,
}: InputContainerProps) => {
  return (
    <div className={s.inputContainer}>
      <label className={s.label}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={s.input}
      />
    </div>
  );
};

const EditContainer = () => {
  const [userInfos, setUserInfos] = useState({
    name: '백지헌',
    email: 'baekjiheonni@gmail.com',
    profileImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GpCMZ_ZhcWCTwy9HAghgSktZHSlXI0gfdQ&s',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInfoChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfos({
        ...userInfos,
        [key]: e.target.value,
      });
    };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfos({
          ...userInfos,
          profileImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={s.container}>
      <div className={s.category}>
        <div className={s.categoryText}>프로필</div>
        <div className={s.profileContent}>
          <div className={s.profileContentLeft}>
            <p className={s.explainText}>
              사용자의 프로필을 관리하는 영역입니다. 이곳에서 해당 박스를 클릭해
              사용자의 이름, 이메일, 사진을 수정할 수 있습니다.
            </p>
            <InputContainer
              label="이름"
              value={userInfos.name}
              onChange={handleInfoChange('name')}
              placeholder="이름을 입력하세요"
            />
            <InputContainer
              label="이메일"
              value={userInfos.email}
              onChange={handleInfoChange('email')}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div
            className={s.profileImage}
            style={{ backgroundImage: `url(${userInfos.profileImage})` }}
            onClick={triggerFileSelect}
          >
            <PencilIcon />
            클릭하여 수정하기
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContainer;
