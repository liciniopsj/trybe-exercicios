def count_words(text):
    word_count = len(text.split(" "))
    return f"Word Count = {word_count}"


def count_letters(text):
    char_counter = dict()

    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1
    return f"{char_counter}"