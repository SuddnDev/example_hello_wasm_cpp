extern "C"
{
    // Import from JS.
    extern void print(int sum);

    // Export to JS.
    int sum(const int a, const int b)
    {
        const int sum = a + b;
        print(sum);
        return sum;
    }
}