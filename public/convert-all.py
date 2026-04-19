import json

# 读取现有数据
with open('data/family.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

persons = data['family']['persons']
converted_persons = {}

# 转换每个人
for person_id, person in persons.items():
    # 提取现有数据
    birth_place = person.get('birthPlace', '')
    # 如果没有 birthPlace，使用默认值
    if not birth_place or birth_place == '':
        birth_place = '广西钦州市灵山县那隆镇长福石岭垌村'
    
    # 使用 biography 或 achievements 作为简介
    biography = person.get('biography', '')
    if not biography:
        achievements = person.get('achievements', [])
        if achievements:
            biography = '。'.join(achievements)
    
    # 转换为新格式 - 保留所有原有字段
    converted_persons[person_id] = {
        'id': person.get('id', person_id),
        'generationCode': person.get('generationCode', '1001'),
        'name': person.get('name', ''),
        'gender': person.get('gender', 'M'),
        'birthDate': person.get('birthDate', ''),
        'deathDate': person.get('deathDate', ''),
        'birthPlace': birth_place,
        'residence': person.get('residence', ''),  # 现居地，默认为空
        'generationWord': person.get('generationWord', ''),  # 字辈，默认为空
        'biography': biography,
        'family': {
            'parents': person.get('family', {}).get('parents', []),
            'spouses': person.get('family', {}).get('spouses', []),
            'children': person.get('family', {}).get('children', [])
        }
    }

# 更新数据
data['family']['persons'] = converted_persons

# 保存新数据
with open('data/family_updated.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('转换完成！')
print(f'转换人数：{len(converted_persons)}')
print('新文件已保存为：data/family_updated.json')
print('请手动替换原文件')
