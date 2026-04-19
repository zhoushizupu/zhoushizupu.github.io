import json
import re

# 读取现有数据
with open('data/family.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

persons = data['family']['persons']
converted_persons = {}

# 转换每个人
for person_id, person in persons.items():
    # 转换出生日期为农历格式
    birth_date = person.get('birthDate', '')
    death_date = person.get('deathDate', '')
    
    # 如果是"公元前 XXX 年"格式，保持不变
    # 如果是"XXX 年"格式，转换为农历格式
    if birth_date and not birth_date.startswith('公元前'):
        # 提取年份
        year_match = re.search(r'(\d+) 年', birth_date)
        if year_match:
            year = year_match.group(1)
            birth_date = f'{year}年'
    
    if death_date and not death_date.startswith('公元前'):
        year_match = re.search(r'(\d+) 年', death_date)
        if year_match:
            year = year_match.group(1)
            death_date = f'{year}年'
    
    # 转换为新格式
    converted_persons[person_id] = {
        'id': person.get('id', person_id),
        'generationCode': person.get('generationCode', '1001'),
        'name': person.get('name', ''),
        'gender': person.get('gender', 'M'),
        'birthDate': birth_date,
        'deathDate': death_date,
        'birthPlace': person.get('birthPlace', '广西钦州市灵山县那隆镇长福石岭垌村') or '广西钦州市灵山县那隆镇长福石岭垌村',
        'residence': person.get('residence', ''),
        'generationWord': person.get('generationWord', ''),
        'biography': person.get('biography', ''),
        'family': {
            'parents': person.get('family', {}).get('parents', []),
            'spouses': person.get('family', {}).get('spouses', []),
            'children': person.get('family', {}).get('children', [])
        }
    }

# 更新数据
data['family']['persons'] = converted_persons

# 保存新数据
with open('data/family_new.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('转换完成！')
print(f'转换人数：{len(converted_persons)}')
print('新文件已保存为：family_new.json')
print('请将 family_new.json 的内容复制到 family.json')
