import MenuItem from "./menuItem";
import * as m from "../../../styles/low/menuPageLowStyle"
import { useEffect, useState } from "react";

function MenuCategory() {
  const [selectedTopCategory, setSelectedTopCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  // localStorage에서 menuData 가져오기
  const menuListData = JSON.parse(localStorage.getItem('menuData'));

  useEffect(() => {
    // 초기 선택 상태 설정
    setSelectedTopCategory('recommendedMenu');
    setSelectedSubCategory('seasonalMenu');

    // 초기 선택 상태 설정
    const firstTopCategory = menuListData.topCategories[0];
    setSelectedTopCategory(firstTopCategory.name);
    
    // 첫 번째 서브 카테고리 설정
    if (firstTopCategory.subCategories.length > 0) {
      setSelectedSubCategory(firstTopCategory.subCategories[0].name);
    }
  }, []);

  // 기본 SubCategory 선택
  const handleTopCategoryClick = (topCategory) => {
    setSelectedTopCategory(topCategory.name);
    // 기본 SubCategory 선택 설정
    if (topCategory.name === '추천메뉴') {
      setSelectedSubCategory('시즌 메뉴');
    } else if (topCategory.name === '커피') {
      setSelectedSubCategory('에스프레소');
    } else if (topCategory.name === '음료') {
      setSelectedSubCategory('에이드');
    } else if (topCategory.name === '음식') {
      setSelectedSubCategory('디저트');
    } else if (topCategory.name === 'MD') {
      setSelectedSubCategory('커피');
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory.name);
  };



  return (
    <div style={{ width: '100%' }}>
      {/* 메뉴 선택 */}
      <m.TopCategoryBox className="topCategory">
        {menuListData.topCategories.map((topCategory) => (
          <m.TopCategoryBtn
            key={topCategory.id}
            className={`${selectedTopCategory === topCategory.name ? 'active' : ''}`}
            onClick={() => handleTopCategoryClick(topCategory)}
          >
            {topCategory.name}
          </m.TopCategoryBtn>
        ))}
      </m.TopCategoryBox>
      <m.SubCategoryBox className="subCategory">
        {menuListData.topCategories.find((tc) => tc.name === selectedTopCategory)?.subCategories.map((subCategory) => (
          <m.SubCategoryBtn
            key={subCategory.id}
            className={`${selectedSubCategory === subCategory.name ? 'active' : ''}`}
            onClick={() => handleSubCategoryClick(subCategory)}
          >
            {subCategory.name}
          </m.SubCategoryBtn>
        ))}
      </m.SubCategoryBox>
      {/* 상세 메뉴 종류 */}
      <m.MenuItemContainer>
      {menuListData.topCategories
          .find((tc) => tc.name === selectedTopCategory)
          ?.subCategories.find((sc) => sc.name === selectedSubCategory)
          ?.items?.map((item, index) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              explain={item.info}
              photoUrl={item.photoUrl}
              options={item.option} // 옵션 추가
            />
          ))}
      </m.MenuItemContainer>
    </div>
  )
}

export default MenuCategory;  