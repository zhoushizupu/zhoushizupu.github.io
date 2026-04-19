// 数据转换脚本 - 将旧格式的家族数据转换为新格式
// 在浏览器控制台运行此脚本

async function convertFamilyData() {
  try {
    // 加载现有数据
    const response = await fetch('/public/data/family.json');
    const data = await response.json();
    
    const persons = data.family.persons;
    const convertedPersons = {};
    
    // 转换每个人
    Object.keys(persons).forEach(id => {
      const person = persons[id];
      
      // 提取农历日期（如果有）
      let birthDateLunar = person.birthDate || '';
      let deathDateLunar = person.deathDate || '';
      
      // 如果是"公元前 XXX 年"格式，转换为农历格式
      if (birthDateLunar.includes('公元前')) {
        const year = birthDateLunar.match(/公元前 (\d+) 年/);
        if (year) {
          birthDateLunar = `公元前${year[1]}年`;
        }
      }
      
      if (deathDateLunar.includes('公元前')) {
        const year = deathDateLunar.match(/公元前 (\d+) 年/);
        if (year) {
          deathDateLunar = `公元前${year[1]}年`;
        }
      }
      
      // 转换为新格式
      convertedPersons[id] = {
        id: person.id,
        generationCode: person.generationCode,
        name: person.name,
        gender: person.gender,
        birthDate: birthDateLunar,
        deathDate: deathDateLunar,
        birthPlace: person.birthPlace || '广西钦州市灵山县那隆镇长福石岭垌村',
        residence: person.residence || '',
        generationWord: person.generationWord || '',
        biography: person.biography || '',
        family: {
          parents: person.family?.parents || [],
          spouses: person.family?.spouses || [],
          children: person.family?.children || []
        }
      };
    });
    
    // 更新数据
    data.family.persons = convertedPersons;
    
    // 输出结果
    console.log('转换完成！');
    console.log('转换后的人数:', Object.keys(convertedPersons).length);
    console.log('JSON 数据:');
    console.log(JSON.stringify(data, null, 2));
    
    // 复制到剪贴板
    await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    console.log('\n✅ 已复制到剪贴板！');
    console.log('请打开 /public/data/family.json，全选 (Ctrl+A)，粘贴 (Ctrl+V)，然后保存 (Ctrl+S)');
    
    return data;
  } catch (error) {
    console.error('转换失败:', error);
    alert('转换失败：' + error.message);
  }
}

// 运行转换
convertFamilyData();
