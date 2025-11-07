# Інструкції для створення нової репозиторії та підключення

## Крок 1: Створіть нову репозиторію на GitHub

1. Перейдіть на https://github.com (або ваш GitLab/Bitbucket)
2. Натисніть кнопку "New repository" (або "+" → "New repository")
3. Заповніть:
   - **Repository name**: наприклад, `testolite-hydrogen` або `testolite-store`
   - **Description**: (опціонально) "TestoLite Hydrogen Shopify Store"
   - **Visibility**: Public або Private (на ваш вибір)
   - **НЕ** додавайте README, .gitignore або license (ми вже маємо файли)
4. Натисніть "Create repository"

## Крок 2: Підключіть локальну папку до нової репозиторії

Після створення репозиторії, GitHub покаже вам URL. Виконайте наступні команди:

```bash
cd /Users/macbookpros/WebstormProjects/Testolite-Hydrogen

# Додайте remote (замініть YOUR_USERNAME та YOUR_REPO_NAME на ваші значення)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Або якщо використовуєте SSH:
# git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git

# Перевірте remote
git remote -v

# Завантажте код на GitHub
git push -u origin main
```

## Альтернативний варіант: Якщо ви хочете створити репозиторію через командний рядок

Якщо у вас встановлений GitHub CLI:

```bash
cd /Users/macbookpros/WebstormProjects/Testolite-Hydrogen
gh repo create testolite-hydrogen --public --source=. --remote=origin --push
```

## Перевірка

Після виконання команд, перевірте на GitHub - ваш код має з'явитися в репозиторії.

## Наступні кроки

Після підключення, для подальших змін використовуйте:

```bash
git add .
git commit -m "Your commit message"
git push
```

