import java.io.IOException;
import java.util.Arrays;

public class Main {
	boolean[] noChild;

	public static void main(String[] args) throws IOException {
		int[] answer = new Main().solution(
				new String[] { "john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young" },
				new String[] { "-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward" },
				new String[] { "young", "john", "tod", "emily", "mary" }, new int[] { 12, 4, 2, 5, 10 });
		// int[] answer = new Main().solution(new String[] {"john", "mary", "edward",
		// "sam", "emily", "jaimie", "tod", "young"}, new String[] {"-", "-", "mary",
		// "edward", "mary", "mary", "jaimie", "edward"}, new String[] {"sam", "emily",
		// "jaimie", "edward"}, new int[] {2,3,5,4});
		System.out.println(Arrays.toString(answer));
	}

	public int[] solution(String[] enroll, String[] referral, String[] seller, int[] amount) {
		int N = enroll.length;
		int[] answer = new int[N];
		String parent;
		int parentPrice = 0, tmp;

		for (int i = 0; i < seller.length; i++) {

			int idx = findIdx(enroll, seller[i]);

			answer[idx] += 90 * amount[i];
			parentPrice = 10 * amount[i];
			parent = referral[idx];

			while (!parent.equals("-")) {

				idx = findIdx(enroll, parent);

				parent = referral[idx];

				tmp = parentPrice;
				parentPrice = (int) (parentPrice * 0.1);
				answer[idx] += tmp - parentPrice;

			}

		}

		return answer;
	}

	private int findIdx(String[] arr, String keyword) {
		for (int i = 0; i < arr.length; i++) {
			if (arr[i].equals(keyword))
				return i;
		}
		return -1;
	}

}
